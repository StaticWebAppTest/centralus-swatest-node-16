module.exports = async function (context, req) {
  const date = "2023-10-06T23:08:06.737Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

