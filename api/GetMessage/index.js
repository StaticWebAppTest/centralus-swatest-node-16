module.exports = async function (context, req) {
  const date = "2024-05-30T16:12:12.498Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

