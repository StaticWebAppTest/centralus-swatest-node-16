module.exports = async function (context, req) {
  const date = "2023-02-17T04:12:12.005Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

