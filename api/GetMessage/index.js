module.exports = async function (context, req) {
  const date = "2023-12-02T23:08:31.252Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

