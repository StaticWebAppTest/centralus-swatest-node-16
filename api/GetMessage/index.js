module.exports = async function (context, req) {
  const date = "2023-08-16T22:07:58.253Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

