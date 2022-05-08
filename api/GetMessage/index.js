module.exports = async function (context, req) {
  const date = "2022-05-08T19:08:59.287Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

