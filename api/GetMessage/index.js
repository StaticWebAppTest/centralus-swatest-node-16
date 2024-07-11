module.exports = async function (context, req) {
  const date = "2024-07-11T20:10:56.756Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

