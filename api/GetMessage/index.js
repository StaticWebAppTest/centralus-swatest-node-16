module.exports = async function (context, req) {
  const date = "2024-12-02T16:15:45.468Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

