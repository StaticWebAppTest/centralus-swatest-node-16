module.exports = async function (context, req) {
  const date = "2024-08-29T09:12:40.398Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

