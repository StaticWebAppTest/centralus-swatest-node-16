module.exports = async function (context, req) {
  const date = "2023-10-23T21:08:10.783Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

