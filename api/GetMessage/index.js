module.exports = async function (context, req) {
  const date = "2023-12-11T00:44:28.516Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

