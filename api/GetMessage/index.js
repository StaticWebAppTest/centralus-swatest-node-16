module.exports = async function (context, req) {
  const date = "2024-09-10T09:13:04.432Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

