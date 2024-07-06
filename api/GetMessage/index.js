module.exports = async function (context, req) {
  const date = "2024-07-06T17:08:09.368Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

