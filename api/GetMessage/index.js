module.exports = async function (context, req) {
  const date = "2023-07-25T10:10:00.767Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

