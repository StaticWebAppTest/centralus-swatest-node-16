module.exports = async function (context, req) {
  const date = "2022-12-06T23:10:00.257Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

