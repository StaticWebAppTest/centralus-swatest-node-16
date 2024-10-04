module.exports = async function (context, req) {
  const date = "2024-10-04T13:19:39.070Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

