module.exports = async function (context, req) {
  const date = "2023-08-11T03:08:50.249Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

