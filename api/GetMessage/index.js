module.exports = async function (context, req) {
  const date = "2022-03-18T02:16:16.479Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

