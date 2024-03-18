module.exports = async function (context, req) {
  const date = "2024-03-18T22:09:11.372Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

