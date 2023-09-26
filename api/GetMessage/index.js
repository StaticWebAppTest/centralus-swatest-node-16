module.exports = async function (context, req) {
  const date = "2023-09-26T22:08:03.576Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

