module.exports = async function (context, req) {
  const date = "2023-12-24T21:07:22.019Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

