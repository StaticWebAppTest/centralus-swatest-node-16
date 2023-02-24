module.exports = async function (context, req) {
  const date = "2023-02-24T21:07:34.741Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

