module.exports = async function (context, req) {
  const date = "2023-01-02T22:08:42.955Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

