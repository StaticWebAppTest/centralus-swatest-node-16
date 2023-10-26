module.exports = async function (context, req) {
  const date = "2023-10-26T15:09:02.678Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

