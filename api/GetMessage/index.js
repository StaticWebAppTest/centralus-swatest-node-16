module.exports = async function (context, req) {
  const date = "2024-02-21T22:08:21.807Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

