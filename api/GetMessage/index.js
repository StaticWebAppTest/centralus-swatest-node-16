module.exports = async function (context, req) {
  const date = "2024-09-18T09:12:51.965Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

