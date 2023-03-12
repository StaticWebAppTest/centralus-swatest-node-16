module.exports = async function (context, req) {
  const date = "2023-03-12T15:08:49.106Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

