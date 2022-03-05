module.exports = async function (context, req) {
  const date = "2022-03-05T14:08:51.824Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

