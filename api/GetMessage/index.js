module.exports = async function (context, req) {
  const date = "2023-02-01T12:19:42.915Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

