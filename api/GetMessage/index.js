module.exports = async function (context, req) {
  const date = "2024-11-24T17:09:32.903Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

