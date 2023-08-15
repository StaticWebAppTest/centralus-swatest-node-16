module.exports = async function (context, req) {
  const date = "2023-08-15T13:09:58.750Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

