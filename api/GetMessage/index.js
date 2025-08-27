module.exports = async function (context, req) {
  const date = "2025-08-27T11:11:15.908Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

