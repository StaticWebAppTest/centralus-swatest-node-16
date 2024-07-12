module.exports = async function (context, req) {
  const date = "2024-07-12T18:13:15.564Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

