module.exports = async function (context, req) {
  const date = "2024-09-17T13:18:45.426Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

