module.exports = async function (context, req) {
  const date = "2024-08-10T14:09:27.947Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

