module.exports = async function (context, req) {
  const date = "2025-06-10T09:15:18.360Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

