module.exports = async function (context, req) {
  const date = "2024-03-11T13:09:19.721Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

