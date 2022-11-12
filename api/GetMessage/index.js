module.exports = async function (context, req) {
  const date = "2022-11-12T13:23:29.063Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

