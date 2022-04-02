module.exports = async function (context, req) {
  const date = "2022-04-02T04:12:42.959Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

