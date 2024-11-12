module.exports = async function (context, req) {
  const date = "2024-11-12T10:12:23.013Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

