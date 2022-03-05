module.exports = async function (context, req) {
  const date = "2022-03-05T05:08:38.314Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

