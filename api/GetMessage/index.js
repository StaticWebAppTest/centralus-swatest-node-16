module.exports = async function (context, req) {
  const date = "2024-01-18T03:10:11.486Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

