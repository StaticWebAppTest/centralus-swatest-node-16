module.exports = async function (context, req) {
  const date = "2022-10-12T10:16:23.084Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

