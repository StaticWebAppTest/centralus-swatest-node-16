module.exports = async function (context, req) {
  const date = "2024-04-11T12:16:37.512Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

