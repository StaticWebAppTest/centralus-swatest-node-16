module.exports = async function (context, req) {
  const date = "2023-12-27T01:46:20.291Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

