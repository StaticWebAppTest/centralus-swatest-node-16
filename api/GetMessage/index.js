module.exports = async function (context, req) {
  const date = "2023-03-25T14:07:33.017Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

