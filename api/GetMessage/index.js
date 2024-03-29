module.exports = async function (context, req) {
  const date = "2024-03-29T05:09:36.121Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

