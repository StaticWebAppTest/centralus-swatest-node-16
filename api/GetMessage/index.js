module.exports = async function (context, req) {
  const date = "2022-11-05T17:10:24.210Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

