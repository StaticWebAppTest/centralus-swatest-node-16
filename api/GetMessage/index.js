module.exports = async function (context, req) {
  const date = "2024-02-01T14:08:40.856Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

