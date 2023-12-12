module.exports = async function (context, req) {
  const date = "2023-12-12T08:12:32.379Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

