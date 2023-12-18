module.exports = async function (context, req) {
  const date = "2023-12-18T17:08:32.293Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

