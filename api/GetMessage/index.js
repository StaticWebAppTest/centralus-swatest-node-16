module.exports = async function (context, req) {
  const date = "2024-07-05T15:10:28.122Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

