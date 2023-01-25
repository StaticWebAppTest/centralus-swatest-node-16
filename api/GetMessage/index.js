module.exports = async function (context, req) {
  const date = "2023-01-25T05:08:50.164Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

