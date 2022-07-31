module.exports = async function (context, req) {
  const date = "2022-07-31T17:11:03.123Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

