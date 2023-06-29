module.exports = async function (context, req) {
  const date = "2023-06-29T02:25:44.572Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

