module.exports = async function (context, req) {
  const date = "2023-06-29T09:10:21.176Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

