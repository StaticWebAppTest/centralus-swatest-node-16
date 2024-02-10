module.exports = async function (context, req) {
  const date = "2024-02-10T20:08:22.899Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

