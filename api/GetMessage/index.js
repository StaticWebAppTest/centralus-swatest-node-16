module.exports = async function (context, req) {
  const date = "2022-04-11T05:09:53.902Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

