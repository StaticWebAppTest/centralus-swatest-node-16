module.exports = async function (context, req) {
  const date = "2023-11-15T14:08:50.796Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

