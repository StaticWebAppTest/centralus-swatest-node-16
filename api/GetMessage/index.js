module.exports = async function (context, req) {
  const date = "2024-01-21T21:07:53.710Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

