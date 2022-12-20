module.exports = async function (context, req) {
  const date = "2022-12-20T16:13:39.385Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

