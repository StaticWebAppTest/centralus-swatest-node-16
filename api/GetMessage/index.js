module.exports = async function (context, req) {
  const date = "2023-12-10T18:10:50.323Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

