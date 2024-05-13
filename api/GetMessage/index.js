module.exports = async function (context, req) {
  const date = "2024-05-13T02:25:33.881Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

