module.exports = async function (context, req) {
  const date = "2024-02-23T14:08:20.091Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

