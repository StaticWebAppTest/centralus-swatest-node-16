module.exports = async function (context, req) {
  const date = "2024-05-28T22:09:10.507Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

