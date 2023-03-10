module.exports = async function (context, req) {
  const date = "2023-03-10T23:09:28.280Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

