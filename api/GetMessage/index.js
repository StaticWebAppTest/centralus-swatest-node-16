module.exports = async function (context, req) {
  const date = "2023-10-07T13:08:38.217Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

