module.exports = async function (context, req) {
  const date = "2024-08-08T09:11:11.016Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

