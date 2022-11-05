module.exports = async function (context, req) {
  const date = "2022-11-05T22:10:22.145Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

