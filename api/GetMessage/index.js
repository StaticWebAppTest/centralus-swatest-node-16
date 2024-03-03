module.exports = async function (context, req) {
  const date = "2024-03-03T19:06:26.391Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

