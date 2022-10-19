module.exports = async function (context, req) {
  const date = "2022-10-19T22:13:26.576Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

