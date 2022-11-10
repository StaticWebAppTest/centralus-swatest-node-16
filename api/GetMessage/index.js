module.exports = async function (context, req) {
  const date = "2022-11-10T17:15:35.656Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

