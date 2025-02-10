module.exports = async function (context, req) {
  const date = "2025-02-10T09:13:16.686Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

