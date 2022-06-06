module.exports = async function (context, req) {
  const date = "2022-06-06T07:10:24.296Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

