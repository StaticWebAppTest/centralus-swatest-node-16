module.exports = async function (context, req) {
  const date = "2022-11-03T04:32:50.781Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

