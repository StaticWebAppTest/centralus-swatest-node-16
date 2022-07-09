module.exports = async function (context, req) {
  const date = "2022-07-09T22:09:27.158Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

