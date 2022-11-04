module.exports = async function (context, req) {
  const date = "2022-11-04T22:11:04.351Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

