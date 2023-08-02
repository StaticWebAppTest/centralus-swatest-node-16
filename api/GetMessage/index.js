module.exports = async function (context, req) {
  const date = "2023-08-02T08:10:53.656Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

