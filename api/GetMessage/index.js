module.exports = async function (context, req) {
  const date = "2025-06-10T11:12:01.332Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

