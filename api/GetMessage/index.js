module.exports = async function (context, req) {
  const date = "2023-11-14T16:09:38.516Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

