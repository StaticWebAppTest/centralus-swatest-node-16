module.exports = async function (context, req) {
  const date = "2024-08-28T04:13:51.103Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

