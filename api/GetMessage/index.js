module.exports = async function (context, req) {
  const date = "2024-07-14T10:12:22.838Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

