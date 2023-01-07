module.exports = async function (context, req) {
  const date = "2023-01-07T15:08:51.148Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

