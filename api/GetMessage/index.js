module.exports = async function (context, req) {
  const date = "2024-05-30T00:45:31.378Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

