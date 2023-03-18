module.exports = async function (context, req) {
  const date = "2023-03-18T23:08:55.881Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

