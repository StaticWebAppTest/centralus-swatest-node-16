module.exports = async function (context, req) {
  const date = "2022-03-26T09:09:24.280Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

