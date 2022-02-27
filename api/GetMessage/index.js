module.exports = async function (context, req) {
  const date = "2022-02-27T19:07:36.202Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

