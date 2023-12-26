module.exports = async function (context, req) {
  const date = "2023-12-26T01:45:39.508Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

