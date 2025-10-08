module.exports = async function (context, req) {
  const date = "2025-10-08T13:24:31.955Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

