module.exports = async function (context, req) {
  const date = "2022-12-08T20:09:20.008Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

