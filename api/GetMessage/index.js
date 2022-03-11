module.exports = async function (context, req) {
  const date = "2022-03-11T16:14:55.813Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

