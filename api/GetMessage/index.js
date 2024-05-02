module.exports = async function (context, req) {
  const date = "2024-05-02T04:11:45.656Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

