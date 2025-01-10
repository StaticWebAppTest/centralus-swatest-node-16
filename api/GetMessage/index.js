module.exports = async function (context, req) {
  const date = "2025-01-10T09:12:52.675Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

