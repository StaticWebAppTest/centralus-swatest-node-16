module.exports = async function (context, req) {
  const date = "2024-10-07T13:20:38.858Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

