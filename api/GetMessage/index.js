module.exports = async function (context, req) {
  const date = "2022-08-13T23:10:22.303Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

