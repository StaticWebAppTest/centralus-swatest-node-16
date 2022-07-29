module.exports = async function (context, req) {
  const date = "2022-07-29T22:10:34.292Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

