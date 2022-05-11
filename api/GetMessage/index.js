module.exports = async function (context, req) {
  const date = "2022-05-11T20:12:21.639Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

