module.exports = async function (context, req) {
  const date = "2022-10-11T05:55:30.909Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

