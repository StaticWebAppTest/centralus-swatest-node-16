module.exports = async function (context, req) {
  const date = "2023-10-06T20:09:19.844Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

