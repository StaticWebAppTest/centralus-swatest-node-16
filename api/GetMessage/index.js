module.exports = async function (context, req) {
  const date = "2023-06-13T11:07:14.280Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

