module.exports = async function (context, req) {
  const date = "2023-10-05T11:07:31.495Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

