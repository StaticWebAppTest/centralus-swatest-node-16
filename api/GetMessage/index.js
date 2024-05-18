module.exports = async function (context, req) {
  const date = "2024-05-18T19:07:07.591Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

