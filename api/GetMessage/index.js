module.exports = async function (context, req) {
  const date = "2025-03-12T02:21:40.370Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

