module.exports = async function (context, req) {
  const date = "2022-08-28T19:09:01.393Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

