module.exports = async function (context, req) {
  const date = "2024-07-14T07:11:32.881Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

