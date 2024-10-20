module.exports = async function (context, req) {
  const date = "2024-10-20T10:11:51.694Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

