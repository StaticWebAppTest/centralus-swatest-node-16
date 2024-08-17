module.exports = async function (context, req) {
  const date = "2024-08-17T08:12:51.225Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

