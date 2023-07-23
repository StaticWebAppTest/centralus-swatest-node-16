module.exports = async function (context, req) {
  const date = "2023-07-23T21:07:16.409Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

