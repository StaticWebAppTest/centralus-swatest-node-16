module.exports = async function (context, req) {
  const date = "2025-05-02T19:10:45.446Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

