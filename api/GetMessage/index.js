module.exports = async function (context, req) {
  const date = "2023-05-14T19:06:40.013Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

