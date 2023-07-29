module.exports = async function (context, req) {
  const date = "2023-07-29T11:06:24.253Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

