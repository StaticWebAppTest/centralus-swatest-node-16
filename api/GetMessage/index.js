module.exports = async function (context, req) {
  const date = "2023-06-02T17:07:49.496Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

