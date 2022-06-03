module.exports = async function (context, req) {
  const date = "2022-06-03T10:13:25.724Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

