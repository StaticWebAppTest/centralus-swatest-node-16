module.exports = async function (context, req) {
  const date = "2023-10-07T18:10:13.615Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

