module.exports = async function (context, req) {
  const date = "2024-05-17T19:07:39.915Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

