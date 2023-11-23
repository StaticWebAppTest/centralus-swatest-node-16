module.exports = async function (context, req) {
  const date = "2023-11-23T14:08:34.454Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

