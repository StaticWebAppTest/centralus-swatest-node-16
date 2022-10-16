module.exports = async function (context, req) {
  const date = "2022-10-16T12:23:48.084Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

