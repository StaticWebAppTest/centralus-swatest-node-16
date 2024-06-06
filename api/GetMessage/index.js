module.exports = async function (context, req) {
  const date = "2024-06-06T14:10:14.070Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

