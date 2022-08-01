module.exports = async function (context, req) {
  const date = "2022-08-01T16:15:52.502Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

