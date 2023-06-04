module.exports = async function (context, req) {
  const date = "2023-06-04T10:08:48.290Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

