module.exports = async function (context, req) {
  const date = "2024-05-20T02:26:13.908Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

