module.exports = async function (context, req) {
  const date = "2024-12-01T05:12:13.385Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

