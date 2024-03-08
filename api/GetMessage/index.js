module.exports = async function (context, req) {
  const date = "2024-03-08T15:09:40.280Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

