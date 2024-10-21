module.exports = async function (context, req) {
  const date = "2024-10-21T10:13:19.965Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

