module.exports = async function (context, req) {
  const date = "2023-01-14T06:11:07.797Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

