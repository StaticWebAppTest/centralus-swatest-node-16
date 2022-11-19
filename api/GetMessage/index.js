module.exports = async function (context, req) {
  const date = "2022-11-19T22:10:01.000Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

