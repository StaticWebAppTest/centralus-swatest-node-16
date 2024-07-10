module.exports = async function (context, req) {
  const date = "2024-07-10T14:09:57.267Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

