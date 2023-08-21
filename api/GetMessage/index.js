module.exports = async function (context, req) {
  const date = "2023-08-21T18:09:04.783Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

