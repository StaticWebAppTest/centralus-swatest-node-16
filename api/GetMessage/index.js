module.exports = async function (context, req) {
  const date = "2024-03-22T20:09:27.506Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

