module.exports = async function (context, req) {
  const date = "2024-09-09T23:12:25.887Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

