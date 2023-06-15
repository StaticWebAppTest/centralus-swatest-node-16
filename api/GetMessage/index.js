module.exports = async function (context, req) {
  const date = "2023-06-15T14:08:10.644Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

