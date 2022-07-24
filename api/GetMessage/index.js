module.exports = async function (context, req) {
  const date = "2022-07-24T11:08:53.371Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

