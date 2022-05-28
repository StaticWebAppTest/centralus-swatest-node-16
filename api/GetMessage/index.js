module.exports = async function (context, req) {
  const date = "2022-05-28T02:41:49.239Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

