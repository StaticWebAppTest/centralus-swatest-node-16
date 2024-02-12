module.exports = async function (context, req) {
  const date = "2024-02-12T10:11:24.444Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

