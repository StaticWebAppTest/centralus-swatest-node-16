module.exports = async function (context, req) {
  const date = "2024-07-02T08:13:16.411Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

