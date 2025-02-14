module.exports = async function (context, req) {
  const date = "2025-02-14T11:09:33.413Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

