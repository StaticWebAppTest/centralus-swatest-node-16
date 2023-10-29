module.exports = async function (context, req) {
  const date = "2023-10-29T13:09:17.504Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

