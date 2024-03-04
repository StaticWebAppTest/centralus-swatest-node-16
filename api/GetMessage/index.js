module.exports = async function (context, req) {
  const date = "2024-03-04T09:41:47.961Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

