module.exports = async function (context, req) {
  const date = "2022-05-18T14:13:43.502Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

