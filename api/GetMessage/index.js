module.exports = async function (context, req) {
  const date = "2024-03-14T18:11:16.086Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

