module.exports = async function (context, req) {
  const date = "2023-08-29T02:44:18.790Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

