module.exports = async function (context, req) {
  const date = "2023-02-18T18:11:17.945Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

