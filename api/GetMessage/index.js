module.exports = async function (context, req) {
  const date = "2024-01-29T20:09:30.046Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

