module.exports = async function (context, req) {
  const date = "2024-09-02T08:15:18.091Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

