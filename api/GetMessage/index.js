module.exports = async function (context, req) {
  const date = "2022-10-01T18:14:48.099Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

