module.exports = async function (context, req) {
  const date = "2024-06-02T14:08:23.622Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

