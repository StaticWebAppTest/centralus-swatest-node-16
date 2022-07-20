module.exports = async function (context, req) {
  const date = "2022-07-20T12:20:45.139Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

