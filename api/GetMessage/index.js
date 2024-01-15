module.exports = async function (context, req) {
  const date = "2024-01-15T08:13:19.483Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

