module.exports = async function (context, req) {
  const date = "2024-06-16T00:51:55.877Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

