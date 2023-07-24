module.exports = async function (context, req) {
  const date = "2023-07-24T11:07:41.507Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

