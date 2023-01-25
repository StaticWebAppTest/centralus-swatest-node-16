module.exports = async function (context, req) {
  const date = "2023-01-25T14:09:09.216Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

