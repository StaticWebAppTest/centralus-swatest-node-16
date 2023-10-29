module.exports = async function (context, req) {
  const date = "2023-10-29T07:07:41.426Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

