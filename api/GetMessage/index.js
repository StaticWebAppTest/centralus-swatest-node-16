module.exports = async function (context, req) {
  const date = "2023-10-30T20:09:12.312Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

