module.exports = async function (context, req) {
  const date = "2023-01-23T11:08:18.098Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

