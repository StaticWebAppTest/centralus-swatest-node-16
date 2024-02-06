module.exports = async function (context, req) {
  const date = "2024-02-06T05:09:22.400Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

