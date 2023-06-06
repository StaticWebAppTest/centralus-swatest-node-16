module.exports = async function (context, req) {
  const date = "2023-06-06T15:08:45.690Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

