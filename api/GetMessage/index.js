module.exports = async function (context, req) {
  const date = "2024-05-04T05:09:19.840Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

