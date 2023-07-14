module.exports = async function (context, req) {
  const date = "2023-07-14T06:13:17.160Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

