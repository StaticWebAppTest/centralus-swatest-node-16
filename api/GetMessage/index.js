module.exports = async function (context, req) {
  const date = "2023-06-14T15:08:37.454Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

