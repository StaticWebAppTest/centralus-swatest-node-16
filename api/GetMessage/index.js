module.exports = async function (context, req) {
  const date = "2023-01-29T09:08:40.854Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

