module.exports = async function (context, req) {
  const date = "2024-02-04T21:07:12.200Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

