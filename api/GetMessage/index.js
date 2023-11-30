module.exports = async function (context, req) {
  const date = "2023-11-30T08:12:01.293Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

