module.exports = async function (context, req) {
  const date = "2022-07-09T10:12:04.556Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

