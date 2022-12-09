module.exports = async function (context, req) {
  const date = "2022-12-09T16:13:05.502Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

