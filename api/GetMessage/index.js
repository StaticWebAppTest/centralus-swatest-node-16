module.exports = async function (context, req) {
  const date = "2024-09-16T10:13:12.483Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

