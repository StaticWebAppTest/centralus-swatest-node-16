module.exports = async function (context, req) {
  const date = "2024-04-01T13:09:31.686Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

