module.exports = async function (context, req) {
  const date = "2024-10-24T11:10:03.258Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

