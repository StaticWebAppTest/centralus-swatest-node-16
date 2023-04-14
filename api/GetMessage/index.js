module.exports = async function (context, req) {
  const date = "2023-04-14T21:07:43.045Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

