module.exports = async function (context, req) {
  const date = "2022-11-18T21:09:48.344Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

