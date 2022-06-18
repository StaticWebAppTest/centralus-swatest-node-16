module.exports = async function (context, req) {
  const date = "2022-06-18T04:17:05.734Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

