module.exports = async function (context, req) {
  const date = "2022-03-11T06:12:58.842Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

