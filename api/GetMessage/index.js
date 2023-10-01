module.exports = async function (context, req) {
  const date = "2023-10-01T20:08:17.396Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

