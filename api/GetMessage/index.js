module.exports = async function (context, req) {
  const date = "2023-05-18T12:16:28.498Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

