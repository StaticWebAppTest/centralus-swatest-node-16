module.exports = async function (context, req) {
  const date = "2022-07-19T09:16:19.786Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

