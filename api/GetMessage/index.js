module.exports = async function (context, req) {
  const date = "2022-12-18T13:11:56.166Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

