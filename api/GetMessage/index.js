module.exports = async function (context, req) {
  const date = "2022-03-10T21:08:51.847Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

