module.exports = async function (context, req) {
  const date = "2023-12-29T05:08:58.426Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

