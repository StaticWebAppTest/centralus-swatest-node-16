module.exports = async function (context, req) {
  const date = "2024-06-21T08:13:22.258Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

