module.exports = async function (context, req) {
  const date = "2022-12-26T15:09:29.964Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

