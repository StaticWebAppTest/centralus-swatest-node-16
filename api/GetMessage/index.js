module.exports = async function (context, req) {
  const date = "2023-06-21T22:08:03.389Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

