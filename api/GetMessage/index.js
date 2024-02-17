module.exports = async function (context, req) {
  const date = "2024-02-17T09:07:55.656Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

