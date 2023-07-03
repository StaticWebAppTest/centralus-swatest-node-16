module.exports = async function (context, req) {
  const date = "2023-07-03T10:10:47.209Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

