module.exports = async function (context, req) {
  const date = "2022-10-22T10:13:25.716Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

