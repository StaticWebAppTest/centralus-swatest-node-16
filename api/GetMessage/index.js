module.exports = async function (context, req) {
  const date = "2024-05-02T22:09:20.807Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

