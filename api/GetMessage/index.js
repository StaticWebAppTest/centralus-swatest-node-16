module.exports = async function (context, req) {
  const date = "2023-08-04T07:07:56.840Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

