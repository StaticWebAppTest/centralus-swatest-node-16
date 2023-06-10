module.exports = async function (context, req) {
  const date = "2023-06-10T07:07:27.266Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

