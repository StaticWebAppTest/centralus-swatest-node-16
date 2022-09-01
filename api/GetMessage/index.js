module.exports = async function (context, req) {
  const date = "2022-09-01T11:09:52.917Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

