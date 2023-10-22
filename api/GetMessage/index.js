module.exports = async function (context, req) {
  const date = "2023-10-22T23:08:11.713Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

