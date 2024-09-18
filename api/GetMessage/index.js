module.exports = async function (context, req) {
  const date = "2024-09-18T19:09:40.309Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

