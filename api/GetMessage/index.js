module.exports = async function (context, req) {
  const date = "2022-05-16T22:11:08.904Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

