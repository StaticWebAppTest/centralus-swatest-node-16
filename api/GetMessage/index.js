module.exports = async function (context, req) {
  const date = "2024-03-06T14:08:12.610Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

