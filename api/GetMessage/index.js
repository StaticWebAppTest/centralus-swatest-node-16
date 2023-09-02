module.exports = async function (context, req) {
  const date = "2023-09-02T17:06:41.974Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

