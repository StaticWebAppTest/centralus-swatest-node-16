module.exports = async function (context, req) {
  const date = "2022-12-20T07:08:31.922Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

