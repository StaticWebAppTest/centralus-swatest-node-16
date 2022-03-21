module.exports = async function (context, req) {
  const date = "2022-03-21T10:11:10.566Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

