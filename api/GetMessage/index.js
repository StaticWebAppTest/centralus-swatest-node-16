module.exports = async function (context, req) {
  const date = "2024-12-12T08:17:06.013Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

