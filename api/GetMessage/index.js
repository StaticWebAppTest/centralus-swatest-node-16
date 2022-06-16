module.exports = async function (context, req) {
  const date = "2022-06-16T12:21:00.639Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

