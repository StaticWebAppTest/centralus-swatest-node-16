module.exports = async function (context, req) {
  const date = "2022-12-11T22:08:39.482Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

