module.exports = async function (context, req) {
  const date = "2024-10-08T05:11:36.406Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

