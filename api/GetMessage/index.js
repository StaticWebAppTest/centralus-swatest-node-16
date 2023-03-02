module.exports = async function (context, req) {
  const date = "2023-03-02T20:11:20.144Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

