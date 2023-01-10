module.exports = async function (context, req) {
  const date = "2023-01-10T14:11:30.621Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

