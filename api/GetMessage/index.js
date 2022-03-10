module.exports = async function (context, req) {
  const date = "2022-03-10T17:11:51.965Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

