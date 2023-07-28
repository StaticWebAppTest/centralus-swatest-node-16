module.exports = async function (context, req) {
  const date = "2023-07-28T14:08:08.624Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

