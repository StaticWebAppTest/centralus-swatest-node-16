module.exports = async function (context, req) {
  const date = "2022-08-24T13:30:23.679Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

