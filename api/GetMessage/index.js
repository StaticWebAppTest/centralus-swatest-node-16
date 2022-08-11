module.exports = async function (context, req) {
  const date = "2022-08-11T21:10:24.095Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

