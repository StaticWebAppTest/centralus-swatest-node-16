module.exports = async function (context, req) {
  const date = "2023-12-12T00:44:14.258Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

