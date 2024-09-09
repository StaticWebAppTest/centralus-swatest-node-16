module.exports = async function (context, req) {
  const date = "2024-09-09T19:09:07.048Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

