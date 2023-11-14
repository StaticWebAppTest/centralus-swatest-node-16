module.exports = async function (context, req) {
  const date = "2023-11-14T10:10:08.304Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

