module.exports = async function (context, req) {
  const date = "2022-07-30T16:13:45.959Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

