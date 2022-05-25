module.exports = async function (context, req) {
  const date = "2022-05-25T22:11:49.937Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

