module.exports = async function (context, req) {
  const date = "2023-08-01T15:09:06.796Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

