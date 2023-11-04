module.exports = async function (context, req) {
  const date = "2023-11-04T23:08:08.840Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

