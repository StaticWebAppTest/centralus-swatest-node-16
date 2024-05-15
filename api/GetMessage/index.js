module.exports = async function (context, req) {
  const date = "2024-05-15T09:12:36.750Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

