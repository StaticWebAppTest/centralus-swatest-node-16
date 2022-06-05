module.exports = async function (context, req) {
  const date = "2022-06-05T19:09:11.479Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

