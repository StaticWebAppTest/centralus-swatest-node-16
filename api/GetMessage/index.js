module.exports = async function (context, req) {
  const date = "2023-11-03T02:17:43.045Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

