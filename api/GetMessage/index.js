module.exports = async function (context, req) {
  const date = "2022-06-13T17:15:51.228Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

