module.exports = async function (context, req) {
  const date = "2023-09-01T04:10:43.544Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

