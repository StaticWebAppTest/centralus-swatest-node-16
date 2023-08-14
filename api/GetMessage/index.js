module.exports = async function (context, req) {
  const date = "2023-08-14T01:40:31.258Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

