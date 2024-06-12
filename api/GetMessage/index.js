module.exports = async function (context, req) {
  const date = "2024-06-12T17:09:01.243Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

