module.exports = async function (context, req) {
  const date = "2022-11-17T00:59:03.479Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

