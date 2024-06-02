module.exports = async function (context, req) {
  const date = "2024-06-02T15:08:56.644Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

