module.exports = async function (context, req) {
  const date = "2024-07-20T13:10:39.955Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

