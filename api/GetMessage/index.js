module.exports = async function (context, req) {
  const date = "2024-02-06T13:10:58.656Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

