module.exports = async function (context, req) {
  const date = "2022-03-09T20:10:30.114Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

