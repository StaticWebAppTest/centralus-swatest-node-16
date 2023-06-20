module.exports = async function (context, req) {
  const date = "2023-06-20T16:11:06.258Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

