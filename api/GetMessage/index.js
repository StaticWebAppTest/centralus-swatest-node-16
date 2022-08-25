module.exports = async function (context, req) {
  const date = "2022-08-25T13:35:00.947Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

