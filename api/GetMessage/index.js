module.exports = async function (context, req) {
  const date = "2022-03-20T07:09:22.710Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

