module.exports = async function (context, req) {
  const date = "2022-09-16T22:12:57.481Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

