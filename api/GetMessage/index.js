module.exports = async function (context, req) {
  const date = "2023-12-11T22:08:55.555Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

