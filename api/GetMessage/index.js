module.exports = async function (context, req) {
  const date = "2024-02-09T11:07:30.273Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

