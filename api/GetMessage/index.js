module.exports = async function (context, req) {
  const date = "2024-05-19T13:09:02.437Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

