module.exports = async function (context, req) {
  const date = "2024-11-14T07:11:57.287Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

