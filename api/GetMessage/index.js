module.exports = async function (context, req) {
  const date = "2023-08-18T08:11:01.716Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

