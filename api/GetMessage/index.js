module.exports = async function (context, req) {
  const date = "2023-06-29T13:17:33.374Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

