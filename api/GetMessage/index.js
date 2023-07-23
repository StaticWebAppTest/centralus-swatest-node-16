module.exports = async function (context, req) {
  const date = "2023-07-23T23:08:40.372Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

