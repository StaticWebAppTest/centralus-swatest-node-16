module.exports = async function (context, req) {
  const date = "2022-12-08T00:49:27.516Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

