module.exports = async function (context, req) {
  const date = "2022-04-29T22:11:18.105Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

