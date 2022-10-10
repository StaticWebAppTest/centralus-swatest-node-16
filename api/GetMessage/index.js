module.exports = async function (context, req) {
  const date = "2022-10-10T15:17:54.959Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

