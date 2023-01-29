module.exports = async function (context, req) {
  const date = "2023-01-29T07:08:06.699Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

