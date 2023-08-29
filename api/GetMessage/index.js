module.exports = async function (context, req) {
  const date = "2023-08-29T22:07:44.505Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

