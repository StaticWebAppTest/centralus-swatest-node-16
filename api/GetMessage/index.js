module.exports = async function (context, req) {
  const date = "2023-06-19T23:08:52.070Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

