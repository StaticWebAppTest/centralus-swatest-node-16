module.exports = async function (context, req) {
  const date = "2024-03-03T12:15:05.408Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

