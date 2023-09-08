module.exports = async function (context, req) {
  const date = "2023-09-08T21:07:22.516Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

