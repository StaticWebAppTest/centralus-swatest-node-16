module.exports = async function (context, req) {
  const date = "2022-03-08T19:08:17.477Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

