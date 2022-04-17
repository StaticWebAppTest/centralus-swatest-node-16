module.exports = async function (context, req) {
  const date = "2022-04-17T11:08:46.154Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

