module.exports = async function (context, req) {
  const date = "2023-10-09T15:09:38.810Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

