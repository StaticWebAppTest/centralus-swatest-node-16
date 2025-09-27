module.exports = async function (context, req) {
  const date = "2025-09-27T23:10:52.908Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

