module.exports = async function (context, req) {
  const date = "2022-07-11T08:14:27.030Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

