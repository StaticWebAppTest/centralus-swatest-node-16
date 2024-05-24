module.exports = async function (context, req) {
  const date = "2024-05-24T07:09:08.810Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

