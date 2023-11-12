module.exports = async function (context, req) {
  const date = "2023-11-12T03:09:14.464Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

