module.exports = async function (context, req) {
  const date = "2023-08-08T01:56:48.738Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

