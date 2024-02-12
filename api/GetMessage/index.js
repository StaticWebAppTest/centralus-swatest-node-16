module.exports = async function (context, req) {
  const date = "2024-02-12T13:09:18.145Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

