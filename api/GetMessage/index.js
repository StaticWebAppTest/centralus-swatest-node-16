module.exports = async function (context, req) {
  const date = "2024-06-21T07:10:40.258Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

