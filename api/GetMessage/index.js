module.exports = async function (context, req) {
  const date = "2023-05-09T22:07:58.924Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

