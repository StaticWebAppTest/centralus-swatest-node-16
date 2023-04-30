module.exports = async function (context, req) {
  const date = "2023-04-30T08:10:21.959Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

