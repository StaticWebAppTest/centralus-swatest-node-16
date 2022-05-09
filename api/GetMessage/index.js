module.exports = async function (context, req) {
  const date = "2022-05-09T23:11:16.502Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

