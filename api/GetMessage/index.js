module.exports = async function (context, req) {
  const date = "2025-01-02T11:09:45.748Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

