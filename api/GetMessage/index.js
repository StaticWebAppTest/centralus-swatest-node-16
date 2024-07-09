module.exports = async function (context, req) {
  const date = "2024-07-09T18:13:39.258Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

