module.exports = async function (context, req) {
  const date = "2023-05-02T21:08:41.396Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

