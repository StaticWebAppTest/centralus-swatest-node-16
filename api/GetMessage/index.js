module.exports = async function (context, req) {
  const date = "2023-04-25T11:07:25.321Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

