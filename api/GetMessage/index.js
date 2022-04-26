module.exports = async function (context, req) {
  const date = "2022-04-26T10:13:10.206Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

