module.exports = async function (context, req) {
  const date = "2023-08-01T20:09:18.783Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

