module.exports = async function (context, req) {
  const date = "2024-03-06T22:08:46.391Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

