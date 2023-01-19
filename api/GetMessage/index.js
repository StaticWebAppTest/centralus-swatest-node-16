module.exports = async function (context, req) {
  const date = "2023-01-19T00:52:51.949Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

