module.exports = async function (context, req) {
  const date = "2025-11-30T09:12:59.486Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

