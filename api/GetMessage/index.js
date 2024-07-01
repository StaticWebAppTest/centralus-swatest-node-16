module.exports = async function (context, req) {
  const date = "2024-07-01T13:14:25.679Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

