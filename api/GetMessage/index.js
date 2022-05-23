module.exports = async function (context, req) {
  const date = "2022-05-23T08:14:24.902Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

