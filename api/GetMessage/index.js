module.exports = async function (context, req) {
  const date = "2023-11-25T12:15:32.805Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

