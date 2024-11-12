module.exports = async function (context, req) {
  const date = "2024-11-12T09:12:23.258Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

