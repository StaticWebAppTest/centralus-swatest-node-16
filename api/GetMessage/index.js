module.exports = async function (context, req) {
  const date = "2022-12-15T18:11:07.269Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

