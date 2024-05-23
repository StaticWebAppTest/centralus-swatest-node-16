module.exports = async function (context, req) {
  const date = "2024-05-23T19:08:57.804Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

