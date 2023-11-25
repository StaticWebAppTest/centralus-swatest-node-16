module.exports = async function (context, req) {
  const date = "2023-11-25T18:10:13.613Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

