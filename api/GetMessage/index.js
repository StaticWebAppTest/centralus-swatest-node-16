module.exports = async function (context, req) {
  const date = "2023-12-17T20:09:14.955Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

