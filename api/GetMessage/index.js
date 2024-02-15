module.exports = async function (context, req) {
  const date = "2024-02-15T23:08:54.694Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

