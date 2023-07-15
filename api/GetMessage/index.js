module.exports = async function (context, req) {
  const date = "2023-07-15T09:08:52.253Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

