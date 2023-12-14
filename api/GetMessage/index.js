module.exports = async function (context, req) {
  const date = "2023-12-14T15:09:40.615Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

