module.exports = async function (context, req) {
  const date = "2023-03-19T12:16:57.068Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

