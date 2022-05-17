module.exports = async function (context, req) {
  const date = "2022-05-17T13:30:35.951Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

