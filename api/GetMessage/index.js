module.exports = async function (context, req) {
  const date = "2023-12-02T10:08:41.807Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

