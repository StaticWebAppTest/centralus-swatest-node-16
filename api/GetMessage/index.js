module.exports = async function (context, req) {
  const date = "2024-02-08T14:08:22.129Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

