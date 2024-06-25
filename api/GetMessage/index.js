module.exports = async function (context, req) {
  const date = "2024-06-25T04:12:28.122Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

