module.exports = async function (context, req) {
  const date = "2022-04-28T06:16:42.634Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

