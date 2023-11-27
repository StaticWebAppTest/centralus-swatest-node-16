module.exports = async function (context, req) {
  const date = "2023-11-27T13:12:46.205Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

