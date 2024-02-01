module.exports = async function (context, req) {
  const date = "2024-02-01T16:11:02.901Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

