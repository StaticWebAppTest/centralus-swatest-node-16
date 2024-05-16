module.exports = async function (context, req) {
  const date = "2024-05-16T15:09:44.379Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

