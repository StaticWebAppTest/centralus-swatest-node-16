module.exports = async function (context, req) {
  const date = "2024-12-11T09:13:22.258Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

