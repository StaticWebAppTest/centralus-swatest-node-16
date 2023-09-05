module.exports = async function (context, req) {
  const date = "2023-09-05T02:13:28.440Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

