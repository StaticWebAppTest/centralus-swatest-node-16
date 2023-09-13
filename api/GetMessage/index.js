module.exports = async function (context, req) {
  const date = "2023-09-13T23:08:23.063Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

