module.exports = async function (context, req) {
  const date = "2023-08-12T13:08:22.442Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

