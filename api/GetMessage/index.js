module.exports = async function (context, req) {
  const date = "2022-09-01T22:11:37.457Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

