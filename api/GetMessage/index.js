module.exports = async function (context, req) {
  const date = "2023-08-19T09:07:19.266Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

