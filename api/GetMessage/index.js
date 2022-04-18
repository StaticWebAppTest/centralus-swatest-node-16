module.exports = async function (context, req) {
  const date = "2022-04-18T06:13:46.631Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

