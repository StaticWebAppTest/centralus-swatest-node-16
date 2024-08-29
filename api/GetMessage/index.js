module.exports = async function (context, req) {
  const date = "2024-08-29T08:14:50.950Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

