module.exports = async function (context, req) {
  const date = "2024-03-13T18:11:10.998Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

