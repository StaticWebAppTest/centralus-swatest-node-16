module.exports = async function (context, req) {
  const date = "2024-05-17T07:09:38.498Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

