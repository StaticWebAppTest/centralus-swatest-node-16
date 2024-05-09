module.exports = async function (context, req) {
  const date = "2024-05-09T13:12:18.390Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

