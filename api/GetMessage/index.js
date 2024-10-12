module.exports = async function (context, req) {
  const date = "2024-10-12T10:10:53.482Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

