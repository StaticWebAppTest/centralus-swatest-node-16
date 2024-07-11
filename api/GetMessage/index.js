module.exports = async function (context, req) {
  const date = "2024-07-11T18:13:42.055Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

