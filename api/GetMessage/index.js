module.exports = async function (context, req) {
  const date = "2022-09-12T13:40:44.186Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

