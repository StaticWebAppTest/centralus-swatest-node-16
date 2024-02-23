module.exports = async function (context, req) {
  const date = "2024-02-23T03:09:45.200Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

