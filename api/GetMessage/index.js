module.exports = async function (context, req) {
  const date = "2022-03-11T05:09:13.138Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

