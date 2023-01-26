module.exports = async function (context, req) {
  const date = "2023-01-26T11:08:09.322Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

