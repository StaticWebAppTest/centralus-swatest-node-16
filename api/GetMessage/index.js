module.exports = async function (context, req) {
  const date = "2023-07-31T15:09:43.039Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

