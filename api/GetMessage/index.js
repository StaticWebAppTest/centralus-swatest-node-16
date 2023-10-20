module.exports = async function (context, req) {
  const date = "2023-10-20T17:07:41.480Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

