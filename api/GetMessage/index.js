module.exports = async function (context, req) {
  const date = "2022-07-10T23:10:54.959Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

