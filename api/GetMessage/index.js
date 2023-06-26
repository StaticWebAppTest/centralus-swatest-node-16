module.exports = async function (context, req) {
  const date = "2023-06-26T01:01:36.924Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

