module.exports = async function (context, req) {
  const date = "2022-08-10T04:13:31.848Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

