module.exports = async function (context, req) {
  const date = "2025-12-23T23:13:25.370Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

