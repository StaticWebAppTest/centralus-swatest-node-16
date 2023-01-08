module.exports = async function (context, req) {
  const date = "2023-01-08T16:11:37.263Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

