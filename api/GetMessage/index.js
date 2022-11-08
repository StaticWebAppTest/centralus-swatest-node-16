module.exports = async function (context, req) {
  const date = "2022-11-08T21:10:55.355Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

