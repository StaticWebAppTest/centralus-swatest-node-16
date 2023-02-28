module.exports = async function (context, req) {
  const date = "2023-02-28T11:08:44.210Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

