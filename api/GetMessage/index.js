module.exports = async function (context, req) {
  const date = "2024-03-23T08:10:34.086Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

