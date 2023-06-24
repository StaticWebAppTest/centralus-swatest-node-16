module.exports = async function (context, req) {
  const date = "2023-06-24T09:09:19.150Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

