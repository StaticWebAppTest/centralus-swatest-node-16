module.exports = async function (context, req) {
  const date = "2023-09-09T13:08:37.544Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

