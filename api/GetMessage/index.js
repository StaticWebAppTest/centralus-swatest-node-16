module.exports = async function (context, req) {
  const date = "2024-10-12T19:08:23.925Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

