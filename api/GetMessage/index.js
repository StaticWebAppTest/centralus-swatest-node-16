module.exports = async function (context, req) {
  const date = "2022-05-11T06:16:06.428Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

