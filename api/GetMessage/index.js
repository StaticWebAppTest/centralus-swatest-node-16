module.exports = async function (context, req) {
  const date = "2024-12-03T11:10:52.379Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

