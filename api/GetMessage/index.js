module.exports = async function (context, req) {
  const date = "2022-10-09T17:21:13.231Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

