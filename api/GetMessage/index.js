module.exports = async function (context, req) {
  const date = "2023-06-30T13:17:08.293Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

