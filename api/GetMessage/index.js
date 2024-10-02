module.exports = async function (context, req) {
  const date = "2024-10-02T08:15:22.761Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

