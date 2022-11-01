module.exports = async function (context, req) {
  const date = "2022-11-01T21:11:40.436Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

