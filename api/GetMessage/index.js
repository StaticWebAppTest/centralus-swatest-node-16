module.exports = async function (context, req) {
  const date = "2024-02-02T00:41:33.908Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

