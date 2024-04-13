module.exports = async function (context, req) {
  const date = "2024-04-13T10:07:52.091Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

