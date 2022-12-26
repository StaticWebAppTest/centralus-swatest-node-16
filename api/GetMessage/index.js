module.exports = async function (context, req) {
  const date = "2022-12-26T14:08:28.656Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

