module.exports = async function (context, req) {
  const date = "2022-10-26T20:13:06.397Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

