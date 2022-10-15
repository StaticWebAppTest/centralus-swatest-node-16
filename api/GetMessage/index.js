module.exports = async function (context, req) {
  const date = "2022-10-15T12:23:52.378Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

