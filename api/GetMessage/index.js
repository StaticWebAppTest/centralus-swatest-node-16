module.exports = async function (context, req) {
  const date = "2023-05-01T20:09:19.783Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

