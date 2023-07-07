module.exports = async function (context, req) {
  const date = "2023-07-07T03:21:53.440Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

