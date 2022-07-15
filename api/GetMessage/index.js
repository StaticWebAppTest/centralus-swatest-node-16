module.exports = async function (context, req) {
  const date = "2022-07-15T22:09:58.005Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

