module.exports = async function (context, req) {
  const date = "2022-05-09T22:10:47.098Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

