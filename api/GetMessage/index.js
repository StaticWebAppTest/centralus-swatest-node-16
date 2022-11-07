module.exports = async function (context, req) {
  const date = "2022-11-07T23:14:03.521Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

