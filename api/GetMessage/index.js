module.exports = async function (context, req) {
  const date = "2022-11-15T13:30:27.709Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

