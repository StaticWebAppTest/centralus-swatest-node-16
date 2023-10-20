module.exports = async function (context, req) {
  const date = "2023-10-20T19:06:47.480Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

