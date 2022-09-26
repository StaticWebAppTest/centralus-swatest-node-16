module.exports = async function (context, req) {
  const date = "2022-09-26T12:25:30.556Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

