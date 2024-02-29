module.exports = async function (context, req) {
  const date = "2024-02-29T17:08:08.394Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

