module.exports = async function (context, req) {
  const date = "2022-11-16T17:10:34.465Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

