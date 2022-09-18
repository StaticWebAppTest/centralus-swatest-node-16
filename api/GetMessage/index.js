module.exports = async function (context, req) {
  const date = "2022-09-18T23:12:20.702Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

