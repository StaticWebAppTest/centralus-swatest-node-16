module.exports = async function (context, req) {
  const date = "2024-03-18T02:15:44.272Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

