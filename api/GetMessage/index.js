module.exports = async function (context, req) {
  const date = "2022-10-13T01:13:26.003Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

