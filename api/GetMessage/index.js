module.exports = async function (context, req) {
  const date = "2024-05-29T03:11:37.390Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

