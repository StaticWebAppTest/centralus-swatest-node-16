module.exports = async function (context, req) {
  const date = "2024-02-04T08:11:05.456Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

