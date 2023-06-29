module.exports = async function (context, req) {
  const date = "2023-06-29T11:08:13.480Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

