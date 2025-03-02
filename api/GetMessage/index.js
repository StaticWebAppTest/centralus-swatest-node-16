module.exports = async function (context, req) {
  const date = "2025-03-02T13:15:07.023Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

