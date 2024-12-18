module.exports = async function (context, req) {
  const date = "2024-12-18T12:23:52.856Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

