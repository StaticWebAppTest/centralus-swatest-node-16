module.exports = async function (context, req) {
  const date = "2023-03-29T17:36:49.480Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

