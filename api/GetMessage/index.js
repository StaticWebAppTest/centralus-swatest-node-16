module.exports = async function (context, req) {
  const date = "2024-06-10T09:12:13.398Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

