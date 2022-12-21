module.exports = async function (context, req) {
  const date = "2022-12-21T03:10:18.716Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

