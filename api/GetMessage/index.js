module.exports = async function (context, req) {
  const date = "2023-09-29T08:11:19.854Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

