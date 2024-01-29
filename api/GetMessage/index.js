module.exports = async function (context, req) {
  const date = "2024-01-29T07:08:54.597Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

