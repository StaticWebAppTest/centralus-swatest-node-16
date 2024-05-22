module.exports = async function (context, req) {
  const date = "2024-05-22T17:08:39.236Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

