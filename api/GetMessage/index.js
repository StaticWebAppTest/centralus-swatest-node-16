module.exports = async function (context, req) {
  const date = "2023-10-28T10:08:04.280Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

