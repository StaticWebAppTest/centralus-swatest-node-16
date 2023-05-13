module.exports = async function (context, req) {
  const date = "2023-05-13T16:09:51.258Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

