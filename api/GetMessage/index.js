module.exports = async function (context, req) {
  const date = "2024-05-24T13:11:04.390Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

