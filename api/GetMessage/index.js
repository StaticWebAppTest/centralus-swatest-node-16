module.exports = async function (context, req) {
  const date = "2024-08-22T03:12:45.908Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

