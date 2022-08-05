module.exports = async function (context, req) {
  const date = "2022-08-05T21:09:40.701Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

