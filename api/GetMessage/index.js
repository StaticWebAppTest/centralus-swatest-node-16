module.exports = async function (context, req) {
  const date = "2023-07-01T15:09:03.747Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

