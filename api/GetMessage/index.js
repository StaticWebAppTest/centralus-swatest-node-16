module.exports = async function (context, req) {
  const date = "2023-11-02T15:09:17.144Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

