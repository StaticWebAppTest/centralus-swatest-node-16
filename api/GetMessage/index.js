module.exports = async function (context, req) {
  const date = "2022-03-24T20:11:36.348Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

