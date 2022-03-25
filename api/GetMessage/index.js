module.exports = async function (context, req) {
  const date = "2022-03-25T20:10:49.504Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

