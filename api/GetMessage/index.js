module.exports = async function (context, req) {
  const date = "2022-05-26T20:13:07.173Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

