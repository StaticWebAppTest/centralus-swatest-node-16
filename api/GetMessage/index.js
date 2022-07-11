module.exports = async function (context, req) {
  const date = "2022-07-11T20:12:55.465Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

