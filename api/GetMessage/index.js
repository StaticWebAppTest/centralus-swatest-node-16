module.exports = async function (context, req) {
  const date = "2022-08-18T18:12:51.461Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

