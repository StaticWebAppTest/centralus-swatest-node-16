module.exports = async function (context, req) {
  const date = "2023-07-30T22:07:18.305Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

