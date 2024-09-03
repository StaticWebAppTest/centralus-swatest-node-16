module.exports = async function (context, req) {
  const date = "2024-09-03T09:12:08.426Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

