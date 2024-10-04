module.exports = async function (context, req) {
  const date = "2024-10-04T14:11:41.226Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

