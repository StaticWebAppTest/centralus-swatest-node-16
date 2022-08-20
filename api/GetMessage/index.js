module.exports = async function (context, req) {
  const date = "2022-08-20T10:11:24.063Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

