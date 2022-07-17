module.exports = async function (context, req) {
  const date = "2022-07-17T13:20:46.957Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

