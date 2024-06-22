module.exports = async function (context, req) {
  const date = "2024-06-22T03:11:47.193Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

