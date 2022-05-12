module.exports = async function (context, req) {
  const date = "2022-05-12T06:15:49.445Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

