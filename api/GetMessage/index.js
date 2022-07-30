module.exports = async function (context, req) {
  const date = "2022-07-30T19:08:20.734Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

