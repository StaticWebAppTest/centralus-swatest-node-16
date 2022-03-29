module.exports = async function (context, req) {
  const date = "2022-03-29T10:11:16.824Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

