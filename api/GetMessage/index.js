module.exports = async function (context, req) {
  const date = "2024-08-07T09:12:04.086Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

