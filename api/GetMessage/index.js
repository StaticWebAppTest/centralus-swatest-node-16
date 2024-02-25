module.exports = async function (context, req) {
  const date = "2024-02-25T08:10:31.610Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

