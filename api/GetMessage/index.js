module.exports = async function (context, req) {
  const date = "2024-11-11T02:15:43.146Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

