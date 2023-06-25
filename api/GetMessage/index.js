module.exports = async function (context, req) {
  const date = "2023-06-25T14:08:39.975Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

