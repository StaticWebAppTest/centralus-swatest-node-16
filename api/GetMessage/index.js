module.exports = async function (context, req) {
  const date = "2024-02-01T09:10:01.367Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

