module.exports = async function (context, req) {
  const date = "2024-12-10T12:25:24.755Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

