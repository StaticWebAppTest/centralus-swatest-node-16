module.exports = async function (context, req) {
  const date = "2024-03-19T13:11:05.408Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

