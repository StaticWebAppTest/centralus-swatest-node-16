module.exports = async function (context, req) {
  const date = "2024-05-02T21:08:39.951Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

