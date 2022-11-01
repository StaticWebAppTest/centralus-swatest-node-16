module.exports = async function (context, req) {
  const date = "2022-11-01T23:13:08.038Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

