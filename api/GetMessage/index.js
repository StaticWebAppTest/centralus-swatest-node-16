module.exports = async function (context, req) {
  const date = "2023-08-03T22:07:57.512Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

