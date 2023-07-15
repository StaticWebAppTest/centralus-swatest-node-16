module.exports = async function (context, req) {
  const date = "2023-07-15T18:11:20.409Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

