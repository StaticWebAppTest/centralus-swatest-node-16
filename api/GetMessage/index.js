module.exports = async function (context, req) {
  const date = "2022-08-17T23:12:02.581Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

