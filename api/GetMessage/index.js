module.exports = async function (context, req) {
  const date = "2023-05-07T13:08:49.617Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

