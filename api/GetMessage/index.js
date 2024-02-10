module.exports = async function (context, req) {
  const date = "2024-02-10T23:08:59.247Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

