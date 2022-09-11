module.exports = async function (context, req) {
  const date = "2022-09-11T04:02:36.555Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

