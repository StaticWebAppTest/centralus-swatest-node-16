module.exports = async function (context, req) {
  const date = "2024-11-18T16:15:35.065Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

