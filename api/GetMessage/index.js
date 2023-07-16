module.exports = async function (context, req) {
  const date = "2023-07-16T11:07:23.356Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

