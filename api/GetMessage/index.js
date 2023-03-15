module.exports = async function (context, req) {
  const date = "2023-03-15T11:08:19.146Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

