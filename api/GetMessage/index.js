module.exports = async function (context, req) {
  const date = "2025-04-02T21:11:45.908Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

