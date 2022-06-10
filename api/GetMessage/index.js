module.exports = async function (context, req) {
  const date = "2022-06-10T04:18:51.496Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

