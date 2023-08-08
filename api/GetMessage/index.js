module.exports = async function (context, req) {
  const date = "2023-08-08T17:08:24.258Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

