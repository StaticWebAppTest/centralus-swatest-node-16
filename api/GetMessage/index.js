module.exports = async function (context, req) {
  const date = "2023-08-29T17:07:48.895Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

