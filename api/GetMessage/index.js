module.exports = async function (context, req) {
  const date = "2023-08-29T06:11:31.922Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

