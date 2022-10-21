module.exports = async function (context, req) {
  const date = "2022-10-21T12:28:22.564Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

