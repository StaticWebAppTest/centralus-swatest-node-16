module.exports = async function (context, req) {
  const date = "2022-09-24T08:15:15.202Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

