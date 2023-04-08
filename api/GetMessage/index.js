module.exports = async function (context, req) {
  const date = "2023-04-08T01:54:04.873Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

