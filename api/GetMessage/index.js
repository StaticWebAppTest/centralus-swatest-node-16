module.exports = async function (context, req) {
  const date = "2023-04-29T14:07:22.696Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

