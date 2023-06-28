module.exports = async function (context, req) {
  const date = "2023-06-28T17:08:49.832Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

