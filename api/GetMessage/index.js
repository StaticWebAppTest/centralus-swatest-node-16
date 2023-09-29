module.exports = async function (context, req) {
  const date = "2023-09-29T15:09:14.339Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

