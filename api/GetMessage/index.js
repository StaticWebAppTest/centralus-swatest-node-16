module.exports = async function (context, req) {
  const date = "2024-02-25T06:10:49.866Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

