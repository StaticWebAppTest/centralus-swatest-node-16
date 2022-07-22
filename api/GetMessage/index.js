module.exports = async function (context, req) {
  const date = "2022-07-22T10:12:18.215Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

