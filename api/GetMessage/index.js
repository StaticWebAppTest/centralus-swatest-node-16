module.exports = async function (context, req) {
  const date = "2023-01-28T12:15:57.338Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

