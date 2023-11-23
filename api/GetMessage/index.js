module.exports = async function (context, req) {
  const date = "2023-11-23T17:08:20.286Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

