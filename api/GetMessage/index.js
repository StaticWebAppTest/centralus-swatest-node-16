module.exports = async function (context, req) {
  const date = "2022-12-08T12:18:09.420Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

