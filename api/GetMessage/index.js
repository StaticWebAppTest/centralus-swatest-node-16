module.exports = async function (context, req) {
  const date = "2022-05-10T04:13:48.734Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

