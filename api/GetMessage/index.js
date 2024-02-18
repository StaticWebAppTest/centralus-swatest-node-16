module.exports = async function (context, req) {
  const date = "2024-02-18T18:10:10.946Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

