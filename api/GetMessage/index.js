module.exports = async function (context, req) {
  const date = "2022-07-05T20:11:27.855Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

