module.exports = async function (context, req) {
  const date = "2024-04-29T07:09:11.906Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

