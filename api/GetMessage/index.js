module.exports = async function (context, req) {
  const date = "2023-11-19T12:15:35.860Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

