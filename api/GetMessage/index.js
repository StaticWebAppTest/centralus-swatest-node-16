module.exports = async function (context, req) {
  const date = "2022-11-18T10:11:49.436Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

