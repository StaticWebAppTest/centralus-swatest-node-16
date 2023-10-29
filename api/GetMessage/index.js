module.exports = async function (context, req) {
  const date = "2023-10-29T19:06:28.667Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

