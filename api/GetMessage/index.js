module.exports = async function (context, req) {
  const date = "2022-07-19T19:08:31.734Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

