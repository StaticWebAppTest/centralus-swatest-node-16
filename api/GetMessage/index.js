module.exports = async function (context, req) {
  const date = "2024-08-10T08:13:01.492Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

