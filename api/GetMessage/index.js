module.exports = async function (context, req) {
  const date = "2022-09-19T21:12:03.228Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

