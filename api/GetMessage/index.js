module.exports = async function (context, req) {
  const date = "2024-08-24T14:10:01.508Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

