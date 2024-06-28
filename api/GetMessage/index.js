module.exports = async function (context, req) {
  const date = "2024-06-28T08:12:46.470Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

