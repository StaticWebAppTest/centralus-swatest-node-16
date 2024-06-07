module.exports = async function (context, req) {
  const date = "2024-06-07T15:10:27.234Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

