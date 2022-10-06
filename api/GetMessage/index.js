module.exports = async function (context, req) {
  const date = "2022-10-06T07:18:34.656Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

