module.exports = async function (context, req) {
  const date = "2022-04-01T11:09:56.303Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

