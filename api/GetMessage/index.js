module.exports = async function (context, req) {
  const date = "2023-04-23T23:08:30.835Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

