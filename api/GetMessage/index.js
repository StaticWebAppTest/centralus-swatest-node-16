module.exports = async function (context, req) {
  const date = "2024-08-05T05:12:25.036Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

