module.exports = async function (context, req) {
  const date = "2023-07-17T17:08:57.312Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

