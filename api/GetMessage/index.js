module.exports = async function (context, req) {
  const date = "2022-06-20T07:10:31.073Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

