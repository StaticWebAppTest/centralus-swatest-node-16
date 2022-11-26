module.exports = async function (context, req) {
  const date = "2022-11-26T21:08:45.416Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

