module.exports = async function (context, req) {
  const date = "2024-04-11T19:07:27.818Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

