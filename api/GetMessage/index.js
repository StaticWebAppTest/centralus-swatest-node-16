module.exports = async function (context, req) {
  const date = "2022-12-20T14:09:14.835Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

