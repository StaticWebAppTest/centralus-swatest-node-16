module.exports = async function (context, req) {
  const date = "2024-08-16T12:20:13.955Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

