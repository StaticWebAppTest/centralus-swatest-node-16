module.exports = async function (context, req) {
  const date = "2023-09-02T10:07:53.028Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

