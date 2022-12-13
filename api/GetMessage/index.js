module.exports = async function (context, req) {
  const date = "2022-12-13T17:08:31.329Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

