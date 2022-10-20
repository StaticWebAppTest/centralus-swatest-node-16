module.exports = async function (context, req) {
  const date = "2022-10-20T15:17:01.959Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

