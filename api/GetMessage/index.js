module.exports = async function (context, req) {
  const date = "2023-08-08T21:07:49.300Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

