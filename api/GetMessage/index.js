module.exports = async function (context, req) {
  const date = "2023-12-20T21:08:09.656Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

