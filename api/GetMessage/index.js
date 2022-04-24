module.exports = async function (context, req) {
  const date = "2022-04-24T11:08:51.976Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

