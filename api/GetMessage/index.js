module.exports = async function (context, req) {
  const date = "2023-03-14T12:24:16.147Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

