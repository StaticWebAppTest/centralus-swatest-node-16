module.exports = async function (context, req) {
  const date = "2023-12-19T00:43:42.015Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

