module.exports = async function (context, req) {
  const date = "2023-03-29T22:09:13.268Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

