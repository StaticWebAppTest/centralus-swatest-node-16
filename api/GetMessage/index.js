module.exports = async function (context, req) {
  const date = "2023-02-16T12:19:07.265Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

