module.exports = async function (context, req) {
  const date = "2024-03-15T17:08:46.480Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

