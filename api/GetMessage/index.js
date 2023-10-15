module.exports = async function (context, req) {
  const date = "2023-10-15T15:07:47.495Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

