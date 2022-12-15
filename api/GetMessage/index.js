module.exports = async function (context, req) {
  const date = "2022-12-15T22:08:53.656Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

