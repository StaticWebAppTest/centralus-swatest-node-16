module.exports = async function (context, req) {
  const date = "2022-11-30T00:55:19.671Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

