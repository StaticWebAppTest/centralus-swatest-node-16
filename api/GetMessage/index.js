module.exports = async function (context, req) {
  const date = "2023-02-15T05:09:38.144Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

