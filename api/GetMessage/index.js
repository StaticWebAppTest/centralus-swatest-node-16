module.exports = async function (context, req) {
  const date = "2023-01-15T08:11:41.739Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

