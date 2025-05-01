module.exports = async function (context, req) {
  const date = "2025-05-01T06:19:33.908Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

