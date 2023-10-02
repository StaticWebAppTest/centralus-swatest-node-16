module.exports = async function (context, req) {
  const date = "2023-10-02T22:08:06.482Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

