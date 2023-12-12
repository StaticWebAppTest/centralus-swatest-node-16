module.exports = async function (context, req) {
  const date = "2023-12-12T23:09:04.507Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

