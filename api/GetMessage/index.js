module.exports = async function (context, req) {
  const date = "2023-10-17T23:08:26.974Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

