module.exports = async function (context, req) {
  const date = "2022-04-12T10:12:32.668Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

