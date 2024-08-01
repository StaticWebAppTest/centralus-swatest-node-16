module.exports = async function (context, req) {
  const date = "2024-08-01T03:12:20.486Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

