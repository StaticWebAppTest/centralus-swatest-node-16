module.exports = async function (context, req) {
  const date = "2024-08-31T05:10:22.357Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

