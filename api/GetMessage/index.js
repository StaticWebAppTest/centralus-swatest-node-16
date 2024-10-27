module.exports = async function (context, req) {
  const date = "2024-10-27T15:10:54.810Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

