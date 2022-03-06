module.exports = async function (context, req) {
  const date = "2022-03-06T05:09:03.813Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

