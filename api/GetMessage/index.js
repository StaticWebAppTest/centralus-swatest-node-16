module.exports = async function (context, req) {
  const date = "2023-10-29T22:07:29.236Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

