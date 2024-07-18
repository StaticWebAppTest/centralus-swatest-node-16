module.exports = async function (context, req) {
  const date = "2024-07-18T07:09:58.516Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

