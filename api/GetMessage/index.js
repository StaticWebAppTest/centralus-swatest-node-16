module.exports = async function (context, req) {
  const date = "2022-07-12T03:53:04.906Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

