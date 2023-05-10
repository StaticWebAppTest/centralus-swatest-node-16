module.exports = async function (context, req) {
  const date = "2023-05-10T06:11:48.804Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

