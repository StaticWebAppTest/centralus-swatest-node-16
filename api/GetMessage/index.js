module.exports = async function (context, req) {
  const date = "2023-07-10T11:08:34.808Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

