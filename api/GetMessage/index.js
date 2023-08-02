module.exports = async function (context, req) {
  const date = "2023-08-02T01:53:24.329Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

