module.exports = async function (context, req) {
  const date = "2024-02-10T10:08:13.532Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

