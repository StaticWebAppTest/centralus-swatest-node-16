module.exports = async function (context, req) {
  const date = "2023-08-08T05:08:25.546Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

