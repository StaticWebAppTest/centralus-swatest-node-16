module.exports = async function (context, req) {
  const date = "2024-07-12T22:09:14.596Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

