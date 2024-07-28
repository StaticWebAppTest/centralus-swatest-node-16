module.exports = async function (context, req) {
  const date = "2024-07-28T21:10:46.483Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

