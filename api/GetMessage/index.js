module.exports = async function (context, req) {
  const date = "2022-09-17T12:20:48.473Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

