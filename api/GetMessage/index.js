module.exports = async function (context, req) {
  const date = "2022-09-20T12:27:21.502Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

