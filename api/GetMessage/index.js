module.exports = async function (context, req) {
  const date = "2023-01-29T05:08:33.441Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

