module.exports = async function (context, req) {
  const date = "2022-11-14T09:12:10.351Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

