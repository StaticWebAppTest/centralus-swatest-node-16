module.exports = async function (context, req) {
  const date = "2022-08-20T14:09:47.642Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

