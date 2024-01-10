module.exports = async function (context, req) {
  const date = "2024-01-10T09:09:43.262Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

