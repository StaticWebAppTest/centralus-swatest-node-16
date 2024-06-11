module.exports = async function (context, req) {
  const date = "2024-06-11T12:19:11.070Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

