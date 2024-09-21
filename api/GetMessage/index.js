module.exports = async function (context, req) {
  const date = "2024-09-21T12:19:12.438Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

