module.exports = async function (context, req) {
  const date = "2023-06-28T22:09:26.055Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

