module.exports = async function (context, req) {
  const date = "2024-07-09T04:12:29.391Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

