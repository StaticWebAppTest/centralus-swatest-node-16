module.exports = async function (context, req) {
  const date = "2024-07-04T14:09:41.733Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

