module.exports = async function (context, req) {
  const date = "2024-06-12T07:09:59.258Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

