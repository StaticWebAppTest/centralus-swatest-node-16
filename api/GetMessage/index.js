module.exports = async function (context, req) {
  const date = "2022-10-10T12:30:05.195Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

