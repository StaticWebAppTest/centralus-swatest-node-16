module.exports = async function (context, req) {
  const date = "2024-06-10T15:11:24.888Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

