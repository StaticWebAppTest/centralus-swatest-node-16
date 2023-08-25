module.exports = async function (context, req) {
  const date = "2023-08-25T21:07:23.280Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

