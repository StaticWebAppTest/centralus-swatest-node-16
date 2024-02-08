module.exports = async function (context, req) {
  const date = "2024-02-08T05:10:23.235Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

