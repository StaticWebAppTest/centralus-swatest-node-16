module.exports = async function (context, req) {
  const date = "2024-10-05T12:20:28.200Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

