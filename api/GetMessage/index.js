module.exports = async function (context, req) {
  const date = "2023-08-30T11:07:00.777Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

