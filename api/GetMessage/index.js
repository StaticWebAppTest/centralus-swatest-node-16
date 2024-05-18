module.exports = async function (context, req) {
  const date = "2024-05-18T12:16:37.432Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

