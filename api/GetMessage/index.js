module.exports = async function (context, req) {
  const date = "2023-08-25T11:06:50.915Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

