module.exports = async function (context, req) {
  const date = "2025-05-02T13:23:19.144Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

