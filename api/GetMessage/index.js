module.exports = async function (context, req) {
  const date = "2023-12-29T10:09:47.816Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

