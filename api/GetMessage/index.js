module.exports = async function (context, req) {
  const date = "2022-07-12T13:33:28.034Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

