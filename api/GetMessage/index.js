module.exports = async function (context, req) {
  const date = "2022-03-23T22:10:27.847Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

