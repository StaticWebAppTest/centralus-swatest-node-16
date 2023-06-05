module.exports = async function (context, req) {
  const date = "2023-06-05T10:09:49.790Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

