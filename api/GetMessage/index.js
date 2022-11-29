module.exports = async function (context, req) {
  const date = "2022-11-29T12:20:09.824Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

