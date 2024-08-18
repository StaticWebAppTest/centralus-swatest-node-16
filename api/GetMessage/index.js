module.exports = async function (context, req) {
  const date = "2024-08-18T09:12:40.508Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

