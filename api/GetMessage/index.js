module.exports = async function (context, req) {
  const date = "2023-09-15T09:08:40.426Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

