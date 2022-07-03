module.exports = async function (context, req) {
  const date = "2022-07-03T23:10:26.744Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

