module.exports = async function (context, req) {
  const date = "2022-04-01T21:09:22.293Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

