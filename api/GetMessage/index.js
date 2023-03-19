module.exports = async function (context, req) {
  const date = "2023-03-19T18:11:07.810Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

