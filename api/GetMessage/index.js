module.exports = async function (context, req) {
  const date = "2023-11-03T11:07:48.426Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

