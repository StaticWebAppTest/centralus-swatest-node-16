module.exports = async function (context, req) {
  const date = "2023-06-29T23:09:50.186Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

