module.exports = async function (context, req) {
  const date = "2025-03-02T12:20:19.644Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

