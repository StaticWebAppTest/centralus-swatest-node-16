module.exports = async function (context, req) {
  const date = "2025-02-08T09:10:40.621Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

