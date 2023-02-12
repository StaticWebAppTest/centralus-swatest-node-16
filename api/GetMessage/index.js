module.exports = async function (context, req) {
  const date = "2023-02-12T17:08:05.556Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

