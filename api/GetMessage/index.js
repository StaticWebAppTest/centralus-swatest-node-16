module.exports = async function (context, req) {
  const date = "2024-08-04T05:09:41.805Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

