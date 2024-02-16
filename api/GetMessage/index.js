module.exports = async function (context, req) {
  const date = "2024-02-16T08:11:36.772Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

