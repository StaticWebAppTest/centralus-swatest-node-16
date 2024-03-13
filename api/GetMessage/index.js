module.exports = async function (context, req) {
  const date = "2024-03-13T21:10:18.070Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

