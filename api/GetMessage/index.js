module.exports = async function (context, req) {
  const date = "2022-12-23T10:10:00.420Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

