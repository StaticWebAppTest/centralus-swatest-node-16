module.exports = async function (context, req) {
  const date = "2024-02-18T23:08:42.532Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

