module.exports = async function (context, req) {
  const date = "2024-02-21T13:09:38.211Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

