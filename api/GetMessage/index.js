module.exports = async function (context, req) {
  const date = "2023-11-26T20:09:02.236Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

