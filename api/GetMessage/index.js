module.exports = async function (context, req) {
  const date = "2024-07-27T11:08:48.955Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

