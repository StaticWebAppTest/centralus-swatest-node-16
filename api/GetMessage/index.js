module.exports = async function (context, req) {
  const date = "2024-04-02T23:10:07.878Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

