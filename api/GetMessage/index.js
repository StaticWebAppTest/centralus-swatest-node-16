module.exports = async function (context, req) {
  const date = "2023-03-24T23:08:40.690Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

