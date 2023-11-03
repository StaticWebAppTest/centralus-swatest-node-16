module.exports = async function (context, req) {
  const date = "2023-11-03T12:16:50.051Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

