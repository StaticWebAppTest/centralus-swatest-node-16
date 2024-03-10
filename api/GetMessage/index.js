module.exports = async function (context, req) {
  const date = "2024-03-10T13:09:39.134Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

