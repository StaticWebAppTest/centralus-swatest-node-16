module.exports = async function (context, req) {
  const date = "2023-12-09T12:15:41.054Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

