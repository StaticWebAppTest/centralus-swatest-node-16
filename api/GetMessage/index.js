module.exports = async function (context, req) {
  const date = "2023-07-13T13:20:17.979Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

